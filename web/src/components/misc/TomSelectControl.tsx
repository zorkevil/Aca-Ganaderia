'use client';

import { useEffect, useRef } from 'react';
import TomSelect from 'tom-select';

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & {
  tomOptions?: any;
};

export default function TomSelectControl({ tomOptions, children, ...rest }: Props) {
  const ref = useRef<HTMLSelectElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const instance = new TomSelect(ref.current, {
      allowEmptyOption: false,
      plugins: { remove_button: { title: 'Quitar' } },
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
      instance.on('change', (value: string | string[]) => updateLabel(value));
    }

    return () => instance.destroy();
  }, [tomOptions]);

  return (
    <select ref={ref} {...rest}>
      {children}
    </select>
  );
}
