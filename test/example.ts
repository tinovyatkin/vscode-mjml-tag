const mjml = (...args: any[]) => args;

const abcd = 1;
const d = { a: "eee" };

export const MJMLHtml = mjml`
  <mjml>
    <mj-head>
      <mj-attributes>
        <mj-class name="mjclass" color="#234235" font-size="30px" />
      </mj-attributes>
      <style>
        .${abcd} {
          font-family: "ee";
        }
      </style>
      <mj-style>
        .ss { font-family: 'ee'; border: 'Lucida Sans', 'Lucida Sans Regular',
        'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif' };
        
        ::root { border-radius: 1px; }
      </mj-style>
    </mj-head>
    <mj-body>
      <mj-section full-width="${abcd}">
        <!-- your code here -->
        <mj-attributes> </mj-attributes>
      </mj-section>
    </mj-body>
  </mjml>
`;
