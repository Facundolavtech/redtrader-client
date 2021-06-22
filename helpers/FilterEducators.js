export default function FilterEducators(educatorsArr) {
  let educators = [];

  for (let educator of educatorsArr) {
    const { educator_info } = educator;

    if (
      typeof educator_info.schedules !== "undefined" &&
      educator_info.educator_thumb !== null
    ) {
      educators.push(educator);
    } else {
      continue;
    }
  }

  return educators;
}
