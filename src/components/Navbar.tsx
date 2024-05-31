import { CaretDownOutlined, MenuOutlined } from "@ant-design/icons";
import "./navbar.css";
import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
	const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
	const [isBrowseDropdownOpen, setIsBrowseDropdownOpen] = useState(false);
	const [isDiscoverDropdownOpen, setIsDiscoverDropdownOpen] = useState(false);

	const handleBrowseDropdownClick = () => {
		setIsBrowseDropdownOpen((prev) => !prev);
		setIsDiscoverDropdownOpen(false);
	};

	const handleDiscoverDropdownClick = () => {
		setIsDiscoverDropdownOpen((prev) => !prev);
		setIsBrowseDropdownOpen(false);
	};

	const handleHamburgerClick = () => {
		setIsHamburgerOpen((prev) => !prev);
	};

	useEffect(() => {
		const handleClickOutside = (event: React.MouseEvent<HTMLElement>) => {
			if (!isBrowseDropdownOpen && !isDiscoverDropdownOpen) return;

			const clickedElement = event.target as HTMLElement;
			const browseDropdown = document.getElementById("dropdown1");
			const discoverDropdown = document.getElementById("dropdown2");

			// Check if clicked outside dropdown and its button
			if (
				clickedElement !== browseDropdown &&
				clickedElement !== discoverDropdown &&
				!(
					clickedElement && clickedElement.classList.contains("dropdown-btn")
				) &&
				!(dropdownButton && dropdownButton.contains(clickedElement))
			) {
				setIsBrowseDropdownOpen(false);
				setIsDiscoverDropdownOpen(false);
			}
		};

		document.addEventListener("click", handleClickOutside);

		return () => document.removeEventListener("click", handleClickOutside);
	}, [isBrowseDropdownOpen, isDiscoverDropdownOpen]);

	return (
		<>
			<header id="nav-menu">
				<div className="container">
					<div className="nav-start">
						<a href="/" className="logo">
							<img src="logo.svg" alt="logo" width="35" height="35" />
						</a>
						<nav className={`menu ${isHamburgerOpen ? "show" : ""}`}>
							<div className={`menu ${isHamburgerOpen ? "show" : ""}`}>
								<ul className="menu-bar">
									<li>
										<button
											className="nav-link dropdown-btn"
											data-dropdown="dropdown1"
											aria-expanded={isBrowseDropdownOpen}
											onClick={() => handleBrowseDropdownClick()}
										>
											Browse
											<CaretDownOutlined aria-hidden="true" />
										</button>
										<div
											id="dropdown1"
											className={`dropdown ${
												isBrowseDropdownOpen ? "active" : ""
											}`}
										>
											<ul>
												<li>
													<a className="dropdown-link" href="#best-of-the-day">
														<img
															src="./icons/botd.svg"
															className="icon"
															alt=""
														/>
														<div>
															<span className="dropdown-link-title">
																Best of the day
															</span>
															<p>Shorts featured today by curators</p>
														</div>
													</a>
												</li>
												<li>
													<a className="dropdown-link" href="#featured-streams">
														<img src="./icons/fs.svg" className="icon" alt="" />
														<div>
															<span className="dropdown-link-title">
																Featured Streams
															</span>
															<p>Leading creatives livestreams</p>
														</div>
													</a>
												</li>
												<li>
													<a className="dropdown-link" href="#subscriptions">
														<img src="./icons/sp.svg" className="icon" alt="" />
														<div>
															<span className="dropdown-link-title">
																Subscriptions
															</span>
															<p>Gain exclusive access</p>
														</div>
													</a>
												</li>
												<li>
													<a className="dropdown-link" href="#creative-feed">
														<img src="./icons/cf.svg" className="icon" alt="" />
														<div>
															<span className="dropdown-link-title">
																Creative Feed
															</span>
															<p>See trending creations</p>
														</div>
													</a>
												</li>
											</ul>
											<ul>
												<span id="apps" className="dropdown-link-title">
													Browse by apps
												</span>
												<li>
													<a className="dropdown-link" href="#adobe-xd">
														<img src="./icons/xd.svg" alt="" />
														Adobe XD
													</a>
												</li>
												<li>
													<a className="dropdown-link" href="#after-effect">
														<img src="./icons/ae.svg" alt="" />
														After Effect
													</a>
												</li>
												<li>
													<a className="dropdown-link" href="#sketch">
														<img src="./icons/sketch.svg" alt="" />
														Sketch
													</a>
												</li>
												<li>
													<a className="dropdown-link" href="#indesign">
														<img src="./icons/indesign.svg" alt="" />
														Indesign
													</a>
												</li>
												<li>
													<a className="dropdown-link" href="#figma">
														<img src="./icons/figma.svg" alt="" />
														Figma
													</a>
												</li>
											</ul>
										</div>
									</li>
									<li>
										<button
											className="nav-link dropdown-btn"
											data-dropdown="dropdown2"
											aria-expanded={isDiscoverDropdownOpen}
											onClick={() => handleDiscoverDropdownClick()}
										>
											Discover
											<CaretDownOutlined aria-hidden="true" />
										</button>
										<div
											id="dropdown2"
											className={`dropdown ${
												isDiscoverDropdownOpen ? "active" : ""
											}`}
										>
											<ul aria-labelledby="categories-title">
												<span
													id="categories-title"
													className="dropdown-link-title"
												>
													Browse Categories
												</span>
												<li>
													<a className="dropdown-link" href="#branding">
														Branding
													</a>
												</li>
												<li>
													<a className="dropdown-link" href="#illustrations">
														Illustration
													</a>
												</li>
											</ul>
											<ul aria-labelledby="download-title">
												<span
													id="download-title"
													className="dropdown-link-title"
												>
													Download App
												</span>
												<li>
													<a className="dropdown-link" href="#mac-windows">
														MacOS & Windows
													</a>
												</li>
												<li>
													<a className="dropdown-link" href="#linux">
														Linux
													</a>
												</li>
											</ul>
										</div>
									</li>
									<li>
										<a className="nav-link" href="/">
											Jobs
										</a>
									</li>
									<li>
										<a className="nav-link" href="/">
											Livestream
										</a>
									</li>
									<li>
										<a className="nav-link" href="/">
											About
										</a>
									</li>
								</ul>
							</div>
						</nav>
					</div>
					<div className="nav-end">
						<div className="right-container">
							<form className="search" role="search">
								<input type="search" name="search" placeholder="Search" />
							</form>
							<a href="#profile">
								<img
									src="https://github.com/Evavic44/responsive-navbar-with-dropdown/blob/main/assets/images/user.jpg?raw=true"
									width="30"
									height="30"
									alt="user image"
								/>
							</a>
							<button className="btn btn-primary">Create</button>
						</div>
						<button
							id="hamburger"
							aria-expanded={isHamburgerOpen}
							onClick={handleHamburgerClick}
						>
							<MenuOutlined className="bx bx-menu" aria-hidden="true" />
						</button>
					</div>
				</div>
			</header>
		</>
	);
};

export default Navbar;
