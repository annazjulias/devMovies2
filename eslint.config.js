"ambiente";
{
  ("navegador", verdadeiro, "es2021", verdadeiro);
}
("estende"[
  ("plugin:react/recomendado",
  "padrão",
  "plugin:react-hooks/recomendado",
  "plugin:prettier/recomendado")
],
  "substitui");
([], "parserOptions");
{
  ("ecmaVersion", "mais recente", "sourceType", "módulo");
}
("plugins"[("reagir", "ganchos de reação", "eeslint-plugin-import-helpers")],
  "regras");
{
  ("mais bonita/mais bonita"[
    ("erro",
    {
      printWidth: 80,
      "largura da guia": 2,
      singleQuote: true, // aspas simples
      trailingComma: "none", // virgula no fim da linha
      arrowParens: "sempre",
      semi: false, // ponto e virgula no fim da linha
      fimDeLinha: "automático",
    })
  ],
    "react/react-in-jsx-scope",
    "desligado",
    "react/prop-types",
    "desligado",
    "react-hooks/rules-of-hooks",
    "erro",
    "react-hooks/exhaustive-deps",
    "aviso",
    "import-helpers/order-imports"[
      ("avisar",
      {
        newlinesBetween: "always", // nova linha entre grupos
        grupos: [
          "/^reagir/",
          "módulo",
          "/^@compartilhado/",
          ["pai", "irmão", "índice"],
        ],
        alfabetizar: {
          ordem: "asc",
          ignoreCase: verdadeiro,
        },
      })
    ]);
}
