export default function FilterEducators(educatorsArr) {
  let educators = [];

  for (let educator of educatorsArr) {
    const { schedules, thumbnail } = educator;

    if (schedules.length > 0 && thumbnail !== "") {
      educators.push(educator);
    } else {
      continue;
    }
  }

  return educators;
}
