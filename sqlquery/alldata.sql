drop TABLE if exists alldata;

SELECT *
INTO alldata
FROM
(
    SELECT * FROM csgo
    UNION ALL
    SELECT * FROM destiny2
	UNION ALL
    SELECT * FROM fo4
	UNION ALL
    SELECT * FROM gta5
	UNION ALL
    SELECT * FROM pd2
	UNION ALL
    SELECT * FROM pubg
	UNION ALL
    SELECT * FROM r6siege
	UNION ALL
    SELECT * FROM rust
	UNION ALL
    SELECT * FROM tf2
	UNION ALL
    SELECT * FROM warframe
	UNION ALL
	SELECT * FROM celeste
    UNION ALL
    SELECT * FROM cuphead
	UNION ALL
    SELECT * FROM deadcells
	UNION ALL
    SELECT * FROM geometrydash
	UNION ALL
    SELECT * FROM gettingoverit
	UNION ALL
    SELECT * FROM gris
	UNION ALL
    SELECT * FROM hollowknight
	UNION ALL
    SELECT * FROM portal2
	UNION ALL
    SELECT * FROM terraria
	UNION ALL
    SELECT * FROM transformice
	UNION ALL
	SELECT * FROM ark
    UNION ALL
    SELECT * FROM bdo
	UNION ALL
    SELECT * FROM conan
	UNION ALL
    SELECT * FROM eso
	UNION ALL
    SELECT * FROM ffxiv
	UNION ALL
    SELECT * FROM mhw
	UNION ALL
    SELECT * FROM poe
	UNION ALL
    SELECT * FROM sevendtd
	UNION ALL
    SELECT * FROM skyrim
	UNION ALL
    SELECT * FROM witcher3
	UNION ALL
	SELECT * FROM assettocorsa
    UNION ALL
    SELECT * FROM beatsaber
	UNION ALL
    SELECT * FROM dirtrally
	UNION ALL
    SELECT * FROM efootballpes2020
	UNION ALL
    SELECT * FROM footballmanager2019
	UNION ALL
    SELECT * FROM nba2k19
	UNION ALL
    SELECT * FROM rocketleague
	UNION ALL
    SELECT * FROM russianfishing4
	UNION ALL
    SELECT * FROM steep
	UNION ALL
    SELECT * FROM tekken7
	UNION ALL
	SELECT * FROM civ6
    UNION ALL
    SELECT * FROM dota2
	UNION ALL
    SELECT * FROM factorio
	UNION ALL
    SELECT * FROM footballmanager2020
	UNION ALL
    SELECT * FROM heartsofiron
	UNION ALL
    SELECT * FROM raft
	UNION ALL
    SELECT * FROM rimworld
	UNION ALL
    SELECT * FROM smite
	UNION ALL
    SELECT * FROM totalwarwarhammer2
	UNION ALL
    SELECT * FROM warthunder
) t;

--for examine purposes
SELECT * FROM alldata ORDER BY datetime, genre;
