const reverseXV = (string) => {
    let start = Date.now();
    arrWords = string.split(" ");

    for (let elem of arrWords) {
        processedStr = elem.split('').reverse().join('');
        console.log(processedStr);
    }
    console.log(Date.now() - start);
}

const reverseXL = (string) => {
    let start = Date.now();
    let transfString = string.split("").reverse().join("")
    let modifString = transfString.split(" ").reverse().join(" ")
    let finalString = modifString.replace(/\s/g, "\n");
    console.log(finalString);
    console.log(Date.now() - start);
}

const reverseJ = (string) => {
    let start = Date.now();
    console.log(string.split(' ').map(function (item) {
        return item.split('').reverse().join('');
    }).join(' ').replace(/\s/g, "\n"));
    console.log(Date.now() - start);
}

reverseXL('hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja shello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja shello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja shello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja shello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja shello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja shello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja shello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja shello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja shello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja shello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja shello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja shello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja shello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja shello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja shello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s hello goodbye sgsfd dfgdflkjg lkdjljsf h pfgjshakjsdlfkgjahlfg hklafsjdlkfajshdklf ahjsdl laksjd lkja s');
// reverseJ('hello goodbye asdad ad ad a');