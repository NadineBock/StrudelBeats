setcps(125/60/4)
$: sound("bd*4").bank("korgkrz").gain(1.2).lpf(1000)//.room(0.7)

$: s("- cb - cb").bank("jd990").gain(0.5).pan("<0.3 1.9>").delay("<0.15 0.9>").color("green")
$: s("hh*8, oh*2, misc").gain(0.65).bank("tr808").speed("<0.85 1.8>").lpf(6000).color("pink")
$: s("- - rim - - - rim -").bank("korgkr55").room(0.7).pan("<0.3 0.8>").gain(0.4).color("blue")
$: s("perc - - - perc - - -").bank("korgkr55").gain(0.5).pan("<0.3 0.8>").room("<0.7 3.2>").color("purple")

$: s("bd*4").bank("tr606").gain(1.4).lpf(2000)//.room(0.5)


