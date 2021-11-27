import {StyleSheet} from 'react-native';

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  title: {
    fontSize: 15,
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 18,
    marginTop: 8,
  },
  buttonContainer: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignItems: 'flex-start',
    marginTop: 8,
  },

  buttonText: {
    color: '#fff',
  },
  divider: {
    marginTop: 36,
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 32,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 12,
  },
  itemText: {
    fontSize: 18,
  },
  itemDelete: {
    width: 23,
    height: 23,
    borderRadius: 13,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemDeleteText: {
    fontSize: 18,
    color: 'white',
  },
});
