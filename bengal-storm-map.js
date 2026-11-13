// BENGAL STORM - Procedural Bangladesh 3D Map Module
// Includes Dhaka, Sylhet, Sunamganj Haor, Sundarbans, Chittagong Port & Cox's Bazar

function initBengalMap(scene) {
    console.log("Loading BENGAL STORM Map Modules...");

    // 1. Base Terrain (Bangladesh Green Plain & Haor Regions)
    const terrainGeo = new THREE.PlaneGeometry(1000, 1000, 32, 32);
    const terrainMat = new THREE.MeshStandardMaterial({ color: 0x1e5631, roughness: 0.8 });
    const terrain = new THREE.Mesh(terrainGeo, terrainMat);
    terrain.rotation.x = -Math.PI / 2;
    scene.add(terrain);

    // 2. Sunamganj & Sylhet Haor / Tea Garden Zones (Water & Hills)
    const waterGeo = new THREE.PlaneGeometry(300, 300);
    const waterMat = new THREE.MeshStandardMaterial({ color: 0x0077be, roughness: 0.2, transparent: true, opacity: 0.8 });
    const haorWater = new THREE.Mesh(waterGeo, waterMat);
    haorWater.rotation.x = -Math.PI / 2;
    haorWater.position.set(-200, 1, -200);
    scene.add(haorWater);

    // 3. Dhaka Metropolis (Building Blocks)
    const buildingMat = new THREE.MeshStandardMaterial({ color: 0x4f4f4f, roughness: 0.5 });
    for (let i = 0; i < 20; i++) {
        const h = Math.random() * 40 + 10;
        const bGeo = new THREE.BoxGeometry(10, h, 10);
        const building = new THREE.Mesh(bGeo, buildingMat);
        building.position.set((Math.random() - 0.5) * 300, h / 2, (Math.random() - 0.5) * 300);
        scene.add(building);
    }

    // 4. Chittagong Port & Cox's Bazar Coastal Details
    const coastalGeo = new THREE.BoxGeometry(400, 2, 50);
    const coastalMat = new THREE.MeshStandardMaterial({ color: 0xc2b280 }); // Sandy beach
    const beach = new THREE.Mesh(coastalGeo, coastalMat);
    beach.position.set(0, 0.5, 300);
    scene.add(beach);

    console.log("Bengal Map Successfully Loaded into Scene!");
}
