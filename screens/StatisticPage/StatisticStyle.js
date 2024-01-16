import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Light grey background
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  chartContainer: {
    backgroundColor: '#fff', // White background for the chart area
    borderRadius: 16,
    shadowColor: '#000', // Shadow for a subtle depth effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333', // Dark text for contrast
    textAlign: 'center',
    marginBottom: 10,
  },
  statistic: {
    fontSize: 18,
    color: '#666', // Slightly lighter text for statistics
    textAlign: 'center',
    marginVertical: 5,
  }
});
