const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    color: state.isSelected ? 'white' : 'black',
    backgroundColor: state.isSelected ? '#5506B0' : 'white',
  }),
  control: (provided: any) => ({
    ...provided,
    boxShadow: null,
    minHeight: '50px',
    fontSize: '20px',
    fontFamily: 'Archivo Narrow',
    borderWidth: 0,
  }),
};

export default customStyles;
