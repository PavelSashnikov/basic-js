module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members) || members.length === 0) return false;

  const filteredMembers = members.filter(member => typeof member === 'string');

  if (filteredMembers.length === 0) return false;
  
  const resArr = filteredMembers.reduce((acc, el) => {
    acc.push(el.trim().toUpperCase()[0]);
    return acc;
  }, []);

  return resArr.length ? resArr.sort().join('') : false;
};