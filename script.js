const foo = function () {
  let counter = 0;

  return function () {
    console.log(++counter);
  };
};

const inner = foo();

inner();
inner();

// let counter = 0;

// const easyCounter = () => {
//   console.log(++counter);
// };

// easyCounter();
// easyCounter();
