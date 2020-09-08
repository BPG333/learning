<!DOCTYPE html>
<html>

<body>
    <script>
        // task 1
        let age = prompt("Сколько вам лет?", "");

        function checkAge(age) {
            if (age >= 18) {
                return true;
            };

            return confirm("Родители разрешили?");
        };

        console.log(checkAge(age));

        // task 2

        function checkAgeTer(age) {
            let result;
            return result = (age >= 18) ? true : confirm("Родители разрешили?");
            //лучше с присваением делать тернарный оператор или так сойдет return (age>=18) ? true : confirm("Родители разрешили?");
        };

        function checkAgeOr(age) {
            let result;
            return result = (age >= 18) || confirm("Родители разрешили?");
            //лучше с присваением делать логический оператор или так сойдет return (age>=18) || confirm("Родители разрешили?");
        };

        console.log(checkAgeTer(age));
        console.log(checkAgeOr(age));

        // task 3

        function isMin(a, b) {
            let result;
            return result = (a > b) ? b : a;
        };

        console.assert(isMin(2, 5) === 2);
        console.assert(isMin(3, -1) === -1);
        console.assert(isMin(1, 1) === 1);

        // task 4

        function pow(x, n) {
            let result = x;
            for (let i = 1; i < n; i++) {
                result *= x;
            };
            return result;
        };
        console.assert(pow(2, 3) === 8);
        console.assert(pow(3, 3) === 27);
        console.assert(pow(5, 5) === 3125);
        console.assert(pow(1, 100) === 1);

    </script>
</body>

</html>