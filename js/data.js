/* ==========================================================================
   Roopesh Mamidala - Portfolio Structured Data
   ========================================================================== */

const PORTFOLIO_DATA = {
  projects: [
    {
      id: "rag-project",
      title: "RAG Project: Enterprise Knowledge Retrieval",
      subtitle: "Retrieval-Augmented Generation with Semantic Search & LLM Reasoning",
      status: "Currently Building",
      statusType: "in-progress",
      category: "AI & Emerging Tech",
      tags: ["Python", "Generative AI", "Vector Embeddings", "RAG", "LLM", "Semantic Search"],
      image: "assets/images/rag-architecture.svg",
      shortDesc: "An evolving Generative AI system implementing Retrieval-Augmented Generation to connect unstructured enterprise data with high-precision vector embeddings and contextual LLM inference.",
      fullDesc: `
        <p>This project explores practical Generative AI and modern AI engineering by developing a production-grade <strong>Retrieval-Augmented Generation (RAG)</strong> pipeline. The architecture is engineered to bridge traditional enterprise data stores with large language models, eliminating hallucinations while providing verifiable citations.</p>
        
        <h4 style="margin: 1.25rem 0 0.5rem; color: #38bdf8;">Key Architectural Pillars:</h4>
        <ul style="padding-left: 1.25rem; color: #94a3b8; line-height: 1.7;">
          <li><strong>Document Ingestion & Chunking:</strong> Dynamic chunking strategies tailored to structured reports, PDFs, and internal knowledge bases.</li>
          <li><strong>Vector Database & Semantic Indexing:</strong> Generating high-dimensional vector representations to enable low-latency similarity search.</li>
          <li><strong>Context Synthesis & Reranking:</strong> Applying cross-encoder reranking algorithms before passing relevant context blocks into the LLM prompt window.</li>
          <li><strong>Continuous Evaluation:</strong> Implementing evaluation metrics for context retrieval precision, answer relevance, and factual consistency.</li>
        </ul>

        <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(245, 158, 11, 0.08); border-left: 3px solid #f59e0b; border-radius: 4px;">
          <strong style="color: #fbbf24;">Current Status:</strong> Active exploration and pipeline prototyping. Actively testing embedding models, latency benchmarks, and hybrid keyword-semantic search combinations.
        </div>
      `
    },
    {
      id: "blockchain-theft",
      title: "Blockchain-Based Theft Detection Framework",
      subtitle: "Decentralized Asset Traceability & Cryptographic Integrity",
      status: "Completed",
      statusType: "completed",
      category: "Security & Systems",
      tags: ["Blockchain", "Distributed Systems", "Cryptography", "Smart Contracts", "Data Integrity"],
      image: "assets/images/blockchain-system.svg",
      shortDesc: "A decentralized blockchain framework designed to enhance physical and digital asset traceability, tamper resistance, and secure transaction verification across multi-party supply networks.",
      fullDesc: `
        <p>Addresses critical vulnerabilities in centralized inventory and asset ownership registries by introducing a <strong>decentralized, immutable audit trail</strong>. The system provides real-time verification of custody transfers and flags unauthorized modifications instantly.</p>
        
        <h4 style="margin: 1.25rem 0 0.5rem; color: #38bdf8;">Technical Highlights:</h4>
        <ul style="padding-left: 1.25rem; color: #94a3b8; line-height: 1.7;">
          <li><strong>Asset Traceability:</strong> Every physical asset is linked to a cryptographic hash token, ensuring provenance can be tracked from origin to end-point.</li>
          <li><strong>Tamper Resistance:</strong> Leverages distributed consensus protocols where no single compromised entity can alter transaction history.</li>
          <li><strong>Cryptographic Validation:</strong> Automated verification rules that detect duplicate registration attempts, custody mismatches, and anomalous transfer spikes.</li>
          <li><strong>Real-World Impact:</strong> Designed to prevent counterfeit circulation and mitigate supply-chain leakage in multi-vendor logistics ecosystems.</li>
        </ul>
      `
    },
    {
      id: "facial-expression-ai",
      title: "Face Expression Recognition Engine",
      subtitle: "Computer Vision & Deep Learning Emotion Classification",
      status: "Completed",
      statusType: "completed",
      category: "AI & Computer Vision",
      tags: ["Python", "Deep Learning", "TensorFlow", "Keras", "Computer Vision", "CNN"],
      image: "assets/images/vision-ai.svg",
      shortDesc: "A computer vision and deep learning system that detects facial landmarks and classifies human emotions into distinct categories with real-time inference capabilities.",
      fullDesc: `
        <p>A machine learning and computer vision project applying <strong>Convolutional Neural Networks (CNNs)</strong> to interpret subtle human facial expressions from real-time video streams and image feeds.</p>
        
        <h4 style="margin: 1.25rem 0 0.5rem; color: #38bdf8;">Methodology & Execution:</h4>
        <ul style="padding-left: 1.25rem; color: #94a3b8; line-height: 1.7;">
          <li><strong>Preprocessing & Face Localization:</strong> Implemented Haar cascades and facial bounding box localization to isolate Region of Interest (ROI) while normalizing lighting variances.</li>
          <li><strong>Deep Neural Architecture:</strong> Built and trained a multi-layer Convolutional Neural Network incorporating dropout, batch normalization, and softmax activation.</li>
          <li><strong>Emotion Classification:</strong> Accurately categorized inputs into multi-class emotional distributions (Happy, Sad, Neutral, Surprise, Anger).</li>
          <li><strong>Optimization:</strong> Tuned hyperparameters and backpropagation rates using Adam optimizer, optimizing inference speed for responsive webcam interaction.</li>
        </ul>
      `
    },
    {
      id: "huffman-compression",
      title: "Data Compression using Huffman Encoding",
      subtitle: "Lossless Compression via Binary Tree Optimization",
      status: "Completed",
      statusType: "completed",
      category: "Algorithms & Optimization",
      tags: ["C++", "Data Structures", "Algorithms", "Binary Trees", "Computational Efficiency"],
      image: "assets/images/compression-tree.svg",
      shortDesc: "An algorithmic project implementing lossless data compression via frequency analysis and binary-tree entropy reduction, optimizing file storage and transmission bandwidth.",
      fullDesc: `
        <p>Demonstrates deep understanding of fundamental computer science algorithms, optimal binary prefix trees, and computational complexity through the implementation of <strong>Huffman Coding</strong>.</p>
        
        <h4 style="margin: 1.25rem 0 0.5rem; color: #38bdf8;">Technical Implementation:</h4>
        <ul style="padding-left: 1.25rem; color: #94a3b8; line-height: 1.7;">
          <li><strong>Frequency-Based Encoding:</strong> Scans input data streams to compute character frequency distributions and construct min-heaps.</li>
          <li><strong>Prefix-Free Binary Tree Construction:</strong> Iteratively merges lowest-frequency nodes into an optimal binary prefix tree, guaranteeing unambiguous decoding without delimiters.</li>
          <li><strong>Bit-Level Serialization:</strong> Packages variable-length bit strings into packed bytes for efficient disk storage and memory utilization.</li>
          <li><strong>Lossless Reconstruction:</strong> Traverses the serialized tree to verify byte-for-byte fidelity upon decompression, achieving substantial compression ratios across text corpora.</li>
        </ul>
      `
    }
  ]
};
