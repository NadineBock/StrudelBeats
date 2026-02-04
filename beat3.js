stack(
  s("bd ~ sd ~"),
  n("0 3 0 2").scale("C1:minor").s("sawtooth").lpf(250),
  note("e3 g3 b3").s("triangle").lpf(50),
).cpm(90/4)
