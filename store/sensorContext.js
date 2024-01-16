import React, { createContext, useState, useEffect } from 'react';
import io from 'socket.io-client';
export const SensorContext = createContext();
export const SensorProvider = ({ children }) => {
    const [sensor1DataArray, setSensor1Data] = useState([0, 0, 0, 0]);
    const [sensor2DataArray, setSensor2Data] = useState([0, 0, 'False', 0]);
    const [sensor3DataArray, setSensor3Data] = useState([0, 0, 0]);
    const [airArray, setAir] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [illuminance, setIlluminance] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [soilHumidity, setSoilHumidity] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [soilTemperature, setSoilTemperature] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [electricalConductivity, setElectricalConductivity] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [humidity, setHumidity] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    
    useEffect(() => {
        const socket = io('http://10.0.2.2:3001');
        socket.on('temperatureLightSensorData', (data) => {
            setSensor3Data(data);
            console.log('Sensor 3', data);
        });
        socket.on('temperatureHumidityEC', (data) => {
            setSensor1Data(data);
            console.log('Sensor 1', data);
        });
        socket.on('temperatureHumidity', (data) => {
            setSensor2Data(data);
            console.log('Sensor 2', data);
        });
        socket.on('temperatureLatestData', (data) => {
            setAir(data);
            console.log('Air Humidity', data);
        });
        socket.on('illuminanceLatestData', (data) => {
            setIlluminance(data);
            console.log('Illuminance', data);
        });
        socket.on('SoilHumidityData', (data) => {
            setSoilHumidity(data);
            console.log('Soil Humidity', data);
        });
        socket.on('SoilTemperatureData', (data) => {
            setSoilTemperature(data);
            console.log('Soil Temperature', data);
        });
        socket.on('electricalConductivityData', (data) => {
            setElectricalConductivity(data);
            console.log('Electrical Conductivity', data);
        });
        socket.on('humidityData', (data) => {
            setHumidity(data);
            console.log('Air Humidity', data);
        });

        return () => socket.disconnect();
    }, []);

    return (
        <SensorContext.Provider value={{ sensor3DataArray, sensor1DataArray, sensor2DataArray, airArray, illuminance, soilHumidity, soilTemperature, electricalConductivity, humidity }}>
            {children}
        </SensorContext.Provider>
    );
};