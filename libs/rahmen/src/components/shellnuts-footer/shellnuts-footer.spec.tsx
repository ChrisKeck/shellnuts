import { newSpecPage } from '@stencil/core/testing';
import { ShellnutsFooter } from './shellnuts-footer';

describe('shellnuts-footer', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [ShellnutsFooter],
      html: '<shellnuts-footer></shellnuts-footer>',
    });
    expect(root).toEqualHtml(`
      <shellnuts-footer>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </shellnuts-footer>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [ShellnutsFooter],
      html: `<shellnuts-footer first="Stencil" last="'Don't call me a framework' JS"></shellnuts-footer>`,
    });
    expect(root).toMatchSnapshot()
  });
});
