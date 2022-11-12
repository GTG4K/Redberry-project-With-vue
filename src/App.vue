<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      entries: [
        {
          id: 1,
          laptop: {
            image: "https://pbs.twimg.com/media/FVqiYNcWYAAEF_Y.jpg",
            name: "Lenovo",
          },
          user: {
            name: "Chika",
            surname: "Fujiwara",
            Email: "Chika@redberry.ge",
          },
        },
        {
          id: 2,
          laptop: {
            image:
              "https://i.pinimg.com/736x/4d/08/85/4d0885341f054cb6f482997555a925a4.jpg",
            name: "HP",
          },
          user: {
            name: "Goddess",
            surname: "Aqua",
            Email: "Aqua@redberry.ge",
          },
        },
        {
          id: 3,
          laptop: {
            image:
              "https://i.pinimg.com/736x/15/50/ee/1550ee86d49cbcc3f530ac53d538cd60.jpg",
            name: "Apple",
          },
          user: {
            name: "Queen",
            surname: "Nino",
            Email: "Nino@redberry.ge",
          },
        },
      ],
    };
  },
  provide() {
    return {
      data: this.entries,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap");
/* font-family: 'Nunito', sans-serif; */

:root {
  --color-100: #62a1eb;
  --color-200: #317ad0;
  --color-300: #1a5dab;

  --bg-color: #f5f5f5;

  --input-grey-100: #ebebeb;
  --input-grey-200: #dddddd;
  --input-grey-300: #cdcdcd;
  --input-grey-text: #2e2e2e;
  --text-dark: #232323;

  --entry-item-background: #eafaff;
  --entry-item-border: #4386a9;

  --error-color: #e52f2f;

  --font: "Nunito", sans-serif;
}

body {
  min-height: 100vh;
}

#app {
  min-height: 100vh;
}

* {
  font-family: var(--font);
  box-sizing: border-box;
  text-decoration: none;
  transition: 0.2s all ease;
  list-style: none;
}

/* Reset Css */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
</style>
