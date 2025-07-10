 const data = {
                doc: ["جلدية", "أطفال", "باطنية","جراحة","أعصاب","نساء وولادة "],
                teacher: ["رياضيات", "علوم", "حاسوب","لغة إنجليزية ","لغة عربية"],
                craftsman: ["نجار","كهربائي","سباك","خياط","ميكانيكي"],
                programer:["تطوير ويب","تطبيقات موبايل","ذكاء اصطناعي","أمن سيبراني","قواعد بيانات"]
            };
            
            function updateOptions() {
                const category = document.getElementById("carrer").value;
                const itemSelect = document.getElementById("specialty");

                itemSelect.innerHTML = "<option value=''>اختر التخصص</option>";

                if (category && data[category]) {
                    data[category].forEach(item => {
                    const option = document.createElement("option");
                    option.textContent = item;
                    itemSelect.appendChild(option);
                    });
                }
                }