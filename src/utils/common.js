export function findByTestAttr(component, attr) {
    return component.find(`[data-test='${attr}']`)
  }