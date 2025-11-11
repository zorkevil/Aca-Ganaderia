'use client';

import { useEffect, useRef } from 'react';
import TomSelect from 'tom-select';

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & {
  tomOptions?: any;
  onValueChange?: (value: string) => void;
};

export default function TomSelectControl({ tomOptions, children, onValueChange, ...rest }: Props) {
  const ref = useRef<HTMLSelectElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const instance = new TomSelect(ref.current, {
      allowEmptyOption: false,
      dropdownParent: 'body',
      controlInput: null,
      ...(tomOptions || {}),
    });

    // Integración con form-floating
    const formFloating = ref.current.closest('.form-floating');
    if (formFloating) {
      const updateLabel = (value: string | string[]) => {
        const val = Array.isArray(value) ? value.join(',') : value;
        if (!val) formFloating.classList.add('no-value');
        else formFloating.classList.remove('no-value');
      };

      updateLabel(instance.getValue() as string | string[]);

      instance.on('change', (value: string | string[]) => {
        updateLabel(value);
        if (onValueChange) {
          // Esperar un tick para no interferir con el render del TomSelect
          setTimeout(() => onValueChange(String(value)), 0);
        }
      });
    }

    return () => instance.destroy();
  }, []); // 👈 ojo: SIN dependencias, así no se destruye en cada render

  return (
    <select ref={ref} {...rest}>
      {children}
    </select>
  );
}
