game.rebuyablesDefault = [
    [ //Layer
        [ //Row
            [ //Buyable
                [new Decimal(0), new Decimal(10), new Decimal(1), new Decimal(0), new Decimal(10), new Decimal(0)],
            ],
        ],
        [
            [
                [new Decimal(0), new Decimal(10), new Decimal(1.10), new Decimal(1), new Decimal(10), new Decimal(0)],
            ],
        ],
        [
            [
                [new Decimal(0), new Decimal(10), new Decimal(0.10), new Decimal(0), new Decimal(10), new Decimal(0)]
            ],
            [
                [new Decimal(0), new Decimal(1000), new Decimal(1.50), new Decimal(1.00), new Decimal(10), new Decimal(0)]
            ],
        ],
        [
            [
                [new Decimal(0), new Decimal(100000), new Decimal(1.00), new Decimal(1.00), new Decimal(10), new Decimal(0), [new Decimal(1), new Decimal(10), new Decimal(0.5), new Decimal(5)]] //adder, logbase, exponent, divisor
            ],
            [
                [new Decimal(0), new Decimal(10), new Decimal(1.00), new Decimal(0), new Decimal(10), new Decimal(0)]
            ],
            [
                [new Decimal(0), new Decimal(1000000), new Decimal(0.01), new Decimal(0), new Decimal(10), new Decimal(0)]
            ],
        ],
    ],
    [
        [
            [
                [new Decimal(0), new Decimal(1), new Decimal(1.00), new Decimal(1.00), new Decimal(10), new Decimal(0)]
            ]
        ],
    ],
]
game.rebuyables = structuredClone(game.rebuyablesDefault)
game.TotalRebuyables = [
    [dec(0), dec(0), dec(0), dec(0)],
    [dec(0)],
    dec(0)
]