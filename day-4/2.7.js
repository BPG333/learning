<!DOCTYPE html>
<html>

<body>
    <p>open console</p>
    <script>
        let a = 1, b = 1;
        let c = ++a;
        let d = b++;

        console.log(`let c = ++a; c = 2 : ${c}`);
        console.log(`let d = b++; d = 1 : ${d}`);

        //let a = 2, but 'a' alredy = 2
        let x = 1 + (a *= 2);

        console.log(`a = 4 : ${a}`);
        console.log(`let x = 1 + (a *= 2); x = 5 : ${x}`);

    </script>
</body>

</html>
© 2020 GitHub, Inc.