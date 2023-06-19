const setVal = (id: string, val: string) => {
  const el = document.getElementById(id);
  if (el) {
    // if el is input
    if (el.tagName === "INPUT") {
      (el as HTMLInputElement).value = val;
    } else if (el.tagName === "DIV") {
      // if el is div
      el.innerHTML = val;
    } else if (el.tagName === "SELECT") {
      // if el is select
      const select = el as HTMLSelectElement;
      for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].value === val) {
          select.selectedIndex = i;
          break;
        }
      }
    }
  }
};

const getVal = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    if (el.tagName === "INPUT") {
      return (el as HTMLInputElement).value;
    } else if (el.tagName === "DIV") {
      return el.innerHTML;
    } else if (el.tagName === "SELECT") {
      const select = el as HTMLSelectElement;
      return select.options[select.selectedIndex].value;
    }
  }
  return "";
};

const getText = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    if (el.tagName === "INPUT") {
      return (el as HTMLInputElement).value;
    } else if (el.tagName === "DIV") {
      return el.innerHTML;
    } else if (el.tagName === "SELECT") {
      const select = el as HTMLSelectElement;
      return select.options[select.selectedIndex].text;
    }
  }
  return "";
};

export { setVal, getVal, getText };
