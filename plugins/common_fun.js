export function checkFutureProgram(program) {
  const programEndDate = new Date(program.program_end_date);
  return programEndDate >= new Date();
}
export function checkProgramIndexLessThan3(_, index) {
  return index < 3;
}
export function compareProgramsStartDate(program_a, program_b) {
  // https://stackoverflow.com/a/10124053/10030480
  return (
    new Date(program_a.program_start_date) -
    new Date(program_b.program_start_date)
  );
}
