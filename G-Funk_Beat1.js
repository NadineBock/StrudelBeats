stack(
  s("bd sd [~ bd] [hh*4 ~ hh*2]").gain(0.9).swing(0.1),
  n("0 3 ~ [2 0]").scale("C2:minor").s("sawtooth").lpf(500).adsr("0.2 0.3 0.4 0.5").gain(0.85),
  chord("Cm7 Gm7 Abmaj7 Fm9").s("gm_electric_piano_1").room(0.4).delay(0.2).gain(0.75),
  note("g4 bb4 d5 ~ [eb5 c5] g4").s("triangle").vowel("a o").lpf("800 1200").gain(0.7)
).cpm(90/4).room(0.3)
