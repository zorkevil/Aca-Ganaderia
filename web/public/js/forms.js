// ============================================================================
// Forms (Tom Select + Floating Labels + Campos dinámicos)
// ============================================================================
document.addEventListener('DOMContentLoaded', function () {
  if (typeof TomSelect === 'undefined') return;

  const selects = document.querySelectorAll('.tom-select');

  selects.forEach(function (selectElement) {
    const config = {
      allowEmptyOption: true,
      controlInput: null,
      render: {
        item: (data, escape) => `<div>${escape(data.text)}</div>`,
        option: (data, escape) =>
          data.value === ''
            ? '<div style="display:none;"></div>'
            : `<div>${escape(data.text)}</div>`,
      },
    };

    // Lógica especial para el select de rol
    if (selectElement.id === 'rol') {
      config.onChange = (value) => {
        const otroContainer = document.getElementById('otro-rol-container');
        const otroInput = document.getElementById('otro-rol');
        if (!otroContainer || !otroInput) return;

        if (value === 'otro') {
          otroContainer.style.display = 'block';
          otroInput.required = true;

          // Reactivar animaciones WOW si existen
          const wowElements = otroContainer.querySelectorAll('.wow');
          wowElements.forEach((element) => {
            const clone = element.cloneNode(true);
            clone.style.visibility = 'hidden';
            element.parentNode.replaceChild(clone, element);
            setTimeout(() => {
              clone.style.visibility = 'visible';
            }, 0);
          });
        } else {
          otroContainer.style.display = 'none';
          otroInput.required = false;
          otroInput.value = '';
        }
      };
    }

    const tomSelect = new TomSelect(selectElement, config);

    // Integración con labels flotantes de Bootstrap
    const formFloating = selectElement.closest('.form-floating');
    if (formFloating) {
      setTimeout(() => {
        function updateLabelState(value) {
          if (!value) {
            formFloating.classList.add('no-value');
          } else {
            formFloating.classList.remove('no-value');
          }
        }

        updateLabelState(tomSelect.getValue());
        tomSelect.on('change', updateLabelState);
      }, 100);
    }
  });
});
