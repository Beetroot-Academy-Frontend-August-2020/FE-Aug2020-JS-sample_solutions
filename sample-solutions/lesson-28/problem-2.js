// Write a function that mimics a SASS mixin, ie. it returns a block of CSS code that can be reused.
// (Hint: look into multi-line strings.)

function mixinFlexbox(direction, spacing) {
return  `
display: flex;
flex-direction: ${direction};
justify-content: ${spacing};
`;
}

console.log(mixinFlexbox('row','column'));