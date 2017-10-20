
export const getSeconds = (time) => `0${time % 60}`.slice(-2);
export const getMinutes = (time) => `0${Math.floor(time / 60)}`.slice(-2);
export const getHours = (time) => `0${Math.floor(time / 600)}`;

export const findById = (id, list) => list.find(item => item.id === id);

export const toggleClass = (list) => ({...list, active: !list.active});

export const updateProject = (list, updated) => {
    const updatedIndex = list.findIndex(item => item.id === updated.id)
    return [
      ...list.slice(0, updatedIndex),
      updated,
      ...list.slice(updatedIndex+1)
    ]
  }

export const partial = (fn, ...args) => fn.bind(null, ...args)