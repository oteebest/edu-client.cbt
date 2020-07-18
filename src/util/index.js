export const GenerateChallenge = (verifier) => {
  return encodeURI(
    window.btoa(crypto.createHash("sha256").update(verifier).digest())
  );
};

export const FormatDate = (date) => {
  var d = new Date(date);
  return [d.getDate(), d.getMonth() + 1, d.getFullYear()].join("/");
};
