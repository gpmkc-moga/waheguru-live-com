export function checkFutureProgram(program) {
  const programEndDate = new Date(program.program_end_date);
  return programEndDate >= new Date();
}
export function checkProgramIndexLessThan3(_, index) {
  return index < 3;
}
