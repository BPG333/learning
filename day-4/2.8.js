<!DOCTYPE html>
<html>

<body>
    <p>open console</p>
    <script>
        let a = 5 > 4;
        let b = "ананас" > "яблоко";
        let c = "2" > "12";
        let d = undefined == null;
        let e = undefined === null;
        let f = null == "\n0\n";
        let g = null === +"\n0\n";

        console.log(`let a = 5 > 4; a = true : ${a}`);
        console.log(`let b = "ананас" > "яблоко"; b = false : ${b}`);
        console.log(`let c = "2" > "12"; c = true : ${c}`);
        console.log(`let d = undefined == null; d = true : ${d}`);
        console.log(`let e = undefined === null; e = false : ${e}`);
        console.log(`let f = null == "\n0\n"; f = false : ${f}`);
        console.log(`let g = null === +"\n0\n" g = false : ${g}`);

    </script>
</body>

</html>