function Checkbox (props) {

  function handleCheck (e) {
    props.setTimeSearch(e.target.checked)
  }

  return(
    <label className='checkbox'>
      <input
        className='checkbox__input'
        type='checkbox'
        onChange={handleCheck}
      />
      <span className='checkbox__state'></span>
    </label>
  );
}

export default Checkbox;