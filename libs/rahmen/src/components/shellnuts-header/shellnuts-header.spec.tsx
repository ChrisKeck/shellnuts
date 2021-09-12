import { newSpecPage } from '@stencil/core/testing';
import { ShellnutsHeader } from './shellnuts-header';

describe('shellnuts-header', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [ShellnutsHeader],
      html: '<shellnuts-header></shellnuts-header>',
    });
    expect(root).toEqualHtml(`
      <shellnuts-header>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </shellnuts-header>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [ShellnutsHeader],
      html: `<shellnuts-header first="Stencil" last="'Don't call me a framework' JS"></shellnuts-header>`,
    });
    expect(root).toMatchSnapshot()
  });
});
