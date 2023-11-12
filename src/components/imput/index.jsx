import './index.css';

function Input({value, onChange}) {
  return (
    <>
      <div>
        <input type="text"  value={value} onChange={onChange} maxLength={30} placeholder='Insira seu repositório'/>
        <p>Ex.: nomeUsuário/nomeRepositório</p>
      </div>
    </>
  );
}

export default Input;
