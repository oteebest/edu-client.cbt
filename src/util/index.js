export const GenerateChallenge = (verifier) => {
  return encodeURI(
    window.btoa(crypto.createHash("sha256").update(verifier).digest())
  );
};
