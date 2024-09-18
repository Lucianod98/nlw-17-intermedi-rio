export async function createGoalCompletion(goalId: string) {
  await fetch('http://localhost:3333/completions', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      goalId,
    }),
  })
}
