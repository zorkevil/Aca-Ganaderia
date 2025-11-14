import { parseDocument } from 'htmlparser2';
import { Element, Node } from 'domhandler';
import serialize from 'dom-serializer';

/** Type guard */
function isElement(node: Node): node is Element {
  return node.type === 'tag';
}

/** Recorrer DOM */
function walk(node: Node, fn: (node: Node) => void) {
  fn(node);

  if ('children' in node && Array.isArray((node as any).children)) {
    for (const child of (node as any).children) {
      walk(child, fn);
    }
  }
}

export function transformContent(html: string): string {
  if (!html) return html;

  const doc = parseDocument(html);
  let delay = 0.4;

  walk(doc, (node) => {
    // -------------------------------------------
    // 0) Convertir highlight/resaltado ANTES DE WOW
    // -------------------------------------------
    if (isElement(node) && node.name === 'resaltado') {
      const wrapper = new Element('div', { class: 'highlight-green' });
      wrapper.children = node.children;
      node.children = [];
      Object.assign(node, wrapper);
    }

    if (isElement(node) && node.name === 'highlight') {
      const wrapper = new Element('div', {
        class:
          'bg-color-4 text-color-2 p-5 border-top-right-radius-40 border-bottom-left-radius-40 mb-4',
      });

      wrapper.children = node.children;
      node.children = [];
      Object.assign(node, wrapper);
    }

    // -------------------------------------------
    // 1) WOW animations para todos los elementos
    // -------------------------------------------
    if (isElement(node)) {
      node.attribs ??= {};

      const existing = node.attribs.class ? node.attribs.class.split(' ') : [];

      node.attribs.class = [...existing, 'wow', 'animate__', 'animate__fadeInUp', 'animated'].join(
        ' ',
      );

      node.attribs['data-wow-delay'] = `${delay.toFixed(1)}s`;
      delay += 0.1;
    }

    // -------------------------------------------
    // 2) h2 → agregar clase h4
    // -------------------------------------------
    if (isElement(node) && node.name === 'h2') {
      const existing = node.attribs.class ? node.attribs.class.split(' ') : [];
      node.attribs.class = [...existing, 'h4'].join(' ');
    }

    // -------------------------------------------
    // 3) img → estilos + lazy
    // -------------------------------------------
    if (isElement(node) && node.name === 'img') {
      const existing = node.attribs.class ? node.attribs.class.split(' ') : [];

      node.attribs.class = [...existing, 'img-fluid', 'w-100', 'mb-4'].join(' ');

      node.attribs.loading = 'lazy';
    }
  });

  return serialize(doc);
}
