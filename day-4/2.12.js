<!DOCTYPE html>
<html>

<body>
    <p>open console</p>
    <script>
        //task 1
        console.log("task 1");

        let i = 3;

        console.log("3, 2, 1");
        while (i) {
            console.log(i--);
        };

        //task 2
        console.log("task 2");

        let i2 = 0;

        console.log("1, 2, 3, 4");
        while (++i2 < 5) {
            console.log(i2);
        };

        i2 = 0;

        console.log("1, 2, 3, 4, 5");
        while (i2++ < 5) {
            console.log(i2);
        };

        //task 3
        console.log("task 3");

        console.log("0,1,2,3,4");
        for (let i = 0; i < 5; i++) console.log(i);

        console.log("0,1,2,3,4");
        for (let i = 0; i < 5; ++i) console.log(i);

        //task 4
        console.log("task 4");
        for (let i = 2; i <= 10; i++) {
            (i % 2) || console.log(i);
        };

        //task 5
        console.log("task 5");
        let i5 = 0;
        while (i5 < 3) {
            console.log(`number ${i5}`);
            i5++;
        };

        //task 6
        console.log("task 6, enter number is greater than 100");

        /*  let number = 0;
  
          while (number <= 100) {
              number = prompt("Enter number is greater than 100:", "");
              if (number === null) break;
          }
        */

        let number;

        do {
            number = prompt("Enter number is greater than 100:", "");
        } while (number <= 100 && number);

        //task 7
        console.log("task 7");

        let arrPrime = [1];
        let n = 100;

        position1:
        for (let i = 2; i <= n; i++) {
            
            for (let j = 2; j <= Math.sqrt(i); j++) {
                if (i % j === 0) {
                    continue position1;
                };
            };
            arrPrime.push(i);
        };

        arrPrime.forEach((e) => {
            console.log(e);
        });

    </script>
</body>

</html>