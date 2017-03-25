  const inputs = document.querySelectorAll('.controls input');

  function handleUpdate(){
    const suffix = this.dataset.sizing || '' ;
    console.log(suffix);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); // Templates  Document Object Model
  }

  inputs.forEach(input => input.addEventListener('change',handleUpdate));
  inputs.forEach(input => input.addEventListener('mousemove',handleUpdate));
