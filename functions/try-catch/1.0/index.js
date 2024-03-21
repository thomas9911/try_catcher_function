const tryCatch = async ({ exceptionAction }, steps) => {
  try {
    await steps();
  } catch (e) {
    let message = e.message ?? "Empty error";
    await runAction({ id: exceptionAction, input: { message } });
  }
};

export default tryCatch;
