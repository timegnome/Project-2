DROP TABLE supertable;
select datetime, sum(players) AS players, sum(twitchviewers) AS twitchviewers
INTO supertable
from
(
    select datetime,players,twitchviewers from ark
    union all
    select datetime,players,twitchviewers from assettocorsa
	union all
    select datetime,players,twitchviewers from bdo
	union all
    select datetime,players,twitchviewers from beatsaber
	union all
    select datetime,players,twitchviewers from celeste
	union all
    select datetime,players,twitchviewers from civ6
	union all
    select datetime,players,twitchviewers from conan
	union all
    select datetime,players,twitchviewers from csgo
	union all
    select datetime,players,twitchviewers from cuphead
	union all
    select datetime,players,twitchviewers from deadcells
	union all
    select datetime,players,twitchviewers from destiny2
	union all
    select datetime,players,twitchviewers from dirtrally
	union all
    select datetime,players,twitchviewers from dota2
	union all
    select datetime,players,twitchviewers from efootballpes2020
	union all
    select datetime,players,twitchviewers from eso
	union all
    select datetime,players,twitchviewers from factorio
	union all
    select datetime,players,twitchviewers from ffxiv
	union all
    select datetime,players,twitchviewers from fo4
	union all
    select datetime,players,twitchviewers from footballmanager2019
	union all
    select datetime,players,twitchviewers from footballmanager2020
	union all
    select datetime,players,twitchviewers from geometrydash
	union all
    select datetime,players,twitchviewers from gettingoverit
	union all
    select datetime,players,twitchviewers from gris
	union all
    select datetime,players,twitchviewers from gta5
	union all
    select datetime,players,twitchviewers from heartsofiron
	union all
    select datetime,players,twitchviewers from hollowknight
	union all
    select datetime,players,twitchviewers from mhw
	union all
    select datetime,players,twitchviewers from nba2k19
	union all
    select datetime,players,twitchviewers from pd2
	union all
    select datetime,players,twitchviewers from poe
	union all
    select datetime,players,twitchviewers from portal2
	union all
    select datetime,players,twitchviewers from pubg
	union all
    select datetime,players,twitchviewers from r6siege
	union all
    select datetime,players,twitchviewers from raft
	union all
    select datetime,players,twitchviewers from rimworld
	union all
    select datetime,players,twitchviewers from rocketleague
	union all
    select datetime,players,twitchviewers from russianfishing4
	union all
    select datetime,players,twitchviewers from rust
	union all
    select datetime,players,twitchviewers from sevendtd
	union all
    select datetime,players,twitchviewers from skyrim
	union all
    select datetime,players,twitchviewers from smite
	union all
    select datetime,players,twitchviewers from steep
	union all
    select datetime,players,twitchviewers from tekken7
	union all
    select datetime,players,twitchviewers from terraria
	union all
    select datetime,players,twitchviewers from tf2
	union all
    select datetime,players,twitchviewers from totalwarwarhammer2
	union all
    select datetime,players,twitchviewers from transformice
	union all
    select datetime,players,twitchviewers from warframe
	union all
    select datetime,players,twitchviewers from warthunder
	union all
    select datetime,players,twitchviewers from witcher3
) t
group by datetime;

select * from supertable;
