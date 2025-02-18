function triggerExample(id) {
    const element = document.querySelector(id);
    element.select();
    element.setSelectionRange(0, 99999);
    document.execCommand('copy');
    //alert("Gekopieerd")
    sessionStorage.setItem("quizcode", element.textContent)
    window.open("quiz.html", "_self");

}