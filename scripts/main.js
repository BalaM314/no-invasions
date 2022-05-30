//When a sector is captured
Events.on(EventType.SectorCaptureEvent, event => {
	//Tell the sector to not have spawns
	event.sector.info.hasSpawns = false;
});