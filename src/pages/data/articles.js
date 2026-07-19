import field0 from "../../assets/research/field/field_6.png";
import field1 from "../../assets/research/field/field_1.png";
import field2 from "../../assets/research/field/field_2.png";
import field3 from "../../assets/research/field/field_3.png";

export const NEWS = [
  {
    id: 13,
    slug: "river-morphology-japan",
    featured: true,
    category: "Research",
    image: field0,
    date: "July 19, 2026",
    readTime: "6 min read",
    title: "Tracking 38 Years of River Morphology Changes in Japan River",
    summary:
      "CWIL completed a multi-decadal assessment of river migration, erosion, and deposition dynamics using Landsat imagery from 1988–2026.",
    author: "CWIL River Engineering Team",

    content: [
      {
        type: "paragraph",
        text: "The Kankai River in eastern Nepal has undergone substantial morphological changes over the last four decades.",
      },

      {
        type: "image",
        src: field0,
        caption:
          "Figure 1. Erosion and deposition zones identified from Landsat imagery.",
      },

      {
        type: "paragraph",
        text: "Using annual Landsat imagery from 1988 to 2026, CWIL developed river masks through NDWI analysis.",
      },

      {
        type: "image",
        src: field0,
        caption:
          "Figure 2. Historical channel migration between 1988 and 2026.",
      },
    ],
  },

  {
    id: 1,
    slug: "kankai-river-morphology-nepal",
    featured: true,
    category: "Research",
    image: field0,
    date: "July 15, 2026",
    readTime: "6 min read",
    title:
      "Tracking 38 Years of River Morphology Changes in Nepal's Kankai River",
    summary:
      "CWIL completed a multi-decadal assessment of river migration, erosion, and deposition dynamics using Landsat imagery from 1988–2026.",
    author: "CWIL River Engineering Team",
    content: `
The Kankai River in eastern Nepal has undergone substantial morphological changes over the last four decades. Understanding these changes is essential for river management, flood mitigation, and sustainable infrastructure planning.

Using annual Landsat imagery from 1988 to 2026, CWIL developed river masks through NDWI analysis and extracted historical channel boundaries. This enabled the quantification of river migration, erosion, deposition, and changes in active channel area.

Results reveal periods of rapid bank erosion as well as channel stabilization phases. Spatial patterns indicate that sediment movement is strongly linked to upstream land cover dynamics and hydrological variability.

The study demonstrates how remote sensing provides an efficient approach for long-term river monitoring where field measurements are limited.
`,
  },

  {
    id: 2,
    slug: "sarawak-hydropower-screening",
    category: "Hydropower",
    image: field1,
    date: "July 10, 2026",
    readTime: "5 min read",
    title: "AI-Assisted Screening of Hydropower Opportunities in Sarawak",
    summary:
      "Combining geospatial analysis, terrain modeling, and machine learning to identify promising hydropower locations.",
    author: "CWIL Hydropower Group",
    content: `
CWIL carried out a regional-scale screening study for identifying potential hydropower sites across Sarawak, Malaysia.

Digital elevation models, river networks, rainfall patterns, land cover, and environmental constraints were integrated into a GIS-based framework. Machine learning techniques were explored to accelerate preliminary site selection.

The workflow automatically evaluates river segments based on head availability, catchment size, expected flow conditions, accessibility, and environmental sensitivity.

The resulting database provides decision makers with a transparent and scalable method for prioritizing future hydropower investments.
`,
  },

  {
    id: 3,
    slug: "dynamic-world-landcover",
    category: "Technology",
    image: field2,
    date: "June 25, 2026",
    readTime: "4 min read",
    title: "Using Dynamic World for Near Real-Time Land Cover Mapping",
    summary:
      "Exploring AI-generated land cover products for water resource planning and environmental monitoring.",
    author: "CWIL GIS Team",
    content: `
Land cover information is fundamental for hydrological modeling, environmental assessment, and watershed management.

This study evaluates Google's Dynamic World dataset as a near real-time source of land cover information. The system applies deep learning techniques to Sentinel-2 imagery to generate continuously updated classifications.

CWIL assessed the dataset across various watershed environments and compared results against conventional classification methods.

Findings suggest that Dynamic World significantly reduces processing time while maintaining useful accuracy for regional water planning applications.
`,
  },

  {
    id: 4,
    slug: "mekong-flood-warning-system",
    category: "Flood Management",
    image: field3,
    date: "June 18, 2026",
    readTime: "5 min read",
    title:
      "Developing a Flood Early Warning Framework for the Lower Mekong Basin",
    summary:
      "Integrating hydrological forecasting, Earth observation, and real-time communication systems for disaster preparedness.",
    author: "CWIL Flood Team",
    content: `
Flooding remains one of the most significant natural hazards throughout the Lower Mekong Basin.

CWIL developed a conceptual early warning framework integrating rainfall forecasting, hydrological simulation, satellite-based flood mapping, and digital communication systems.

The framework supports timely decision-making by providing flood forecasts, risk maps, and automated warning messages to communities and authorities.

The approach demonstrates how modern geospatial technologies can enhance disaster preparedness and resilience.
`,
  },

  {
    id: 5,
    slug: "tonle-sap-water-security",
    category: "Water Supply",
    image: field2,
    date: "June 05, 2026",
    readTime: "4 min read",
    title: "Assessing Future Water Security for Tonle Sap Communities",
    summary:
      "Evaluating surface and groundwater resources to support sustainable water supply planning under climate change.",
    author: "CWIL Water Resources Team",
    content: `
Tonle Sap supports millions of people through fisheries, agriculture, and domestic water use.

This study investigated future water availability under population growth and climate change scenarios. Surface water, groundwater, and seasonal storage conditions were evaluated.

Results indicate increasing pressure on water resources during dry seasons, highlighting the need for adaptive water management strategies.

The findings provide valuable insights for long-term community water security planning.
`,
  },

  {
    id: 6,
    slug: "remote-sensing-flood-mapping",
    category: "Remote Sensing",
    image: field3,
    date: "May 27, 2026",
    readTime: "3 min read",
    title: "Satellite-Based Flood Mapping Using Sentinel-1 SAR Imagery",
    summary:
      "CWIL tested rapid flood detection workflows for emergency response using cloud-based geospatial processing platforms.",
    author: "CWIL Earth Observation Team",
    content: `
Rapid flood mapping is essential during emergencies.

Using Sentinel-1 SAR imagery, CWIL developed an automated workflow capable of detecting flood extent even under cloudy conditions.

The methodology combines SAR image processing, thresholding techniques, and cloud-based analysis to generate flood maps within hours of image acquisition.

The system has strong potential for emergency response and post-disaster assessment.
`,
  },

  {
    id: 7,
    slug: "land-cover-change-hydropower-basin",
    category: "Environmental Assessment",
    image: field1,
    date: "May 15, 2026",
    readTime: "6 min read",
    title:
      "Twenty Years of Land Cover Change in a Hydropower Development Basin",
    summary:
      "Long-term landscape transformation was evaluated to support sustainable hydropower planning and reservoir management.",
    author: "CWIL Environmental Team",
    content: `
Land cover change influences erosion rates, sediment delivery, and watershed hydrology.

CWIL analyzed two decades of satellite imagery to evaluate forest loss, agricultural expansion, and urban development within a proposed hydropower basin.

The results highlight areas where environmental management interventions could reduce future sedimentation risks.

The study supports more sustainable hydropower planning and operation.
`,
  },

  {
    id: 8,
    slug: "machine-learning-soil-erosion",
    category: "Artificial Intelligence",
    image: field0,
    date: "May 04, 2026",
    readTime: "5 min read",
    title: "Machine Learning Approaches for Soil Erosion Risk Assessment",
    summary:
      "Testing ensemble machine learning models to identify erosion hotspots and prioritize watershed conservation measures.",
    author: "CWIL AI Lab",
    content: `
Accurate identification of erosion hotspots is critical for watershed management.

CWIL compared multiple machine learning algorithms using terrain, rainfall, land cover, and soil data.

Results demonstrate strong predictive performance for identifying high-risk erosion zones.

These methods provide an efficient alternative to conventional erosion assessment approaches.
`,
  },

  {
    id: 9,
    slug: "cwil-launches-website",
    category: "Announcement",
    image: field2,
    date: "April 28, 2026",
    readTime: "2 min read",
    title: "CWIL Launches Its Official Website",
    summary:
      "The new platform showcases projects, research findings, publications, and innovative water intelligence solutions.",
    author: "CWIL Communications",
    content: `
CWIL officially launched its new website to showcase research projects, publications, technical services, and organizational activities.

The platform was designed with a focus on accessibility, scientific communication, and public engagement.

Future updates will include interactive maps, project databases, publications, and educational resources.
`,
  },

  {
    id: 10,
    slug: "river-sediment-source-analysis",
    category: "River Engineering",
    image: field0,
    date: "April 15, 2026",
    readTime: "7 min read",
    title:
      "Identifying Sediment Source Zones Through River Morphology Analysis",
    summary:
      "Combining river migration patterns, terrain analysis, and watershed characteristics to understand sediment pathways.",
    author: "CWIL River Engineering Team",
    content: `
Understanding sediment sources is essential for river management and infrastructure planning.

CWIL combined river morphology analysis, terrain assessment, and watershed characteristics to identify major sediment-producing zones.

The findings improve understanding of sediment transport pathways and support targeted watershed conservation efforts.
`,
  },

  {
    id: 11,
    slug: "sediment-testing",
    category: "River Engineering",
    image: field2,
    date: "April 15, 2026",
    readTime: "7 min read",
    title: "Sediment Source Zones Through River Morphology Analysis",
    summary:
      "Combining river migration patterns, terrain analysis, and watershed characteristics to understand sediment pathways.",
    author: "CWIL River Engineering Team",
    content: `
CWIL officially launched its new website to showcase research projects, publications, technical services, and organizational activities.

The platform was designed with a focus on accessibility, scientific communication, and public engagement.

Future updates will include interactive maps, project databases, publications, and educational resources.
`,
  },

  {
    id: 12,
    slug: "river-morphology-cambodia",
    featured: true,
    category: "Research",
    image: field1,
    date: "July 19, 2026",
    readTime: "6 min read",
    title: "Tracking 38 Years of River Morphology Changes in Cambodia River",
    summary:
      "CWIL completed a multi-decadal assessment of river migration, erosion, and deposition dynamics using Landsat imagery from 1988–2026.",
    author: "CWIL River Engineering Team",

    content: [
      {
        type: "paragraph",
        text: "The Kankai River in eastern Nepal has undergone substantial morphological changes over the last four decades.",
      },

      {
        type: "image",
        src: field0,
        caption:
          "Figure 1. Erosion and deposition zones identified from Landsat imagery.",
      },

      {
        type: "paragraph",
        text: "Using annual Landsat imagery from 1988 to 2026, CWIL developed river masks through NDWI analysis.",
      },

      {
        type: "image",
        src: field0,
        caption:
          "Figure 2. Historical channel migration between 1988 and 2026.",
      },
    ],
  },
];
