function Checkbox (props) {
  return(
    <label className='checkbox'>
      <input className='checkbox__input' type='checkbox'/>
      <span className='checkbox__state'></span>
    </label>
  );
}

export default Checkbox;