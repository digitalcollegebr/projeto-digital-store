export default function ProductOptions({label, options, value, onChange, shape = 'square', type = 'text', radius = '4px'}) {
  return <div className="product-options"><p className="option-label">{label}: <strong>{type === 'text' ? value : ''}</strong></p>
    <div className={`option-items shape-${shape}`}>
      {options.map(option => <button type="button" key={option} className={value === option ? 'selected' : ''} style={{borderRadius:shape === 'circle' ? '50%' : radius}} aria-label={type==='color' ? `Selecionar cor ${option}` : `Selecionar tamanho ${option}`} aria-pressed={value === option} onClick={() => onChange(option)}>
        {type === 'color' ? <span className="color-dot" style={{backgroundColor: option}} /> : option}
      </button>)}
    </div>
  </div>;
}
