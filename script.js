const get = (async () => {
  try {
    const response = await fetch(
      "https://65f2c67a105614e6549ec665.mockapi.io/groups"
    );
    const groups = await response.json();

    console.log(groups.filter((group) => Boolean(group.name)));
  } catch (error) {
    console.log("ЧТо то случилося");
  }

  console.log("Завершился");
})();

// let isLoading = true;
// const groups = fetch("https://65f2c67a1056149ec665.mockapi.io/groups")
//   .then((res) => {
//     return res.json();
//   })
//   .then((groups) => {
//     console.log(groups.filter((group) => Boolean(group.name)));
//     return groups;
//   })
//   .catch((err) => {
//     console.error("Сломалося", err);
//   })
//   .finally(() => {
//     isLoading = false;
//   });
