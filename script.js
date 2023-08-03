const inputs = document.querySelectorAll(".controls input");
const img = document.querySelector("img");

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    const valueWithSuffix = this.value + suffix;

    switch (this.name) {
        case 'angle':
          img.style.setProperty('--angle', valueWithSuffix);
          img.style.transform = `rotate(${valueWithSuffix})`;
          break;
        case 'blur':
          img.style.setProperty('--blur', valueWithSuffix);
          img.style.filter = `blur(${valueWithSuffix})`;
          break;
        case 'scale':
          img.style.setProperty('--scale', valueWithSuffix);
          img.style.transform = `scale(${valueWithSuffix})`;
          break;
        default:
          break;
    }
}

inputs.forEach(input => input.addEventListener('input', handleUpdate));