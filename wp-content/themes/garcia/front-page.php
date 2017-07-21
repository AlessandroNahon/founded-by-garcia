<?php

/*
	Template Name: Home
*/

get_header();  ?>


<?php
	$splashImage = get_field('background_image');
	$splashLogo = get_field('logo_icon');

	$profilePic = get_field('profile_picture');
	$profileText = get_field('profile_text');

  if( have_rows('nav_repeater') ):
      while ( have_rows('nav_repeater') ) : the_row();
     	$navLogo = get_sub_field('nav_logo');
     	$navAbout = get_sub_field('nav_about');
      endwhile;
  endif;
?>

<div class="main home" style="background-image:url(<?php echo $splashImage['url']; ?>);">
  <div class="container">
  	<div class="home-logo">
  		<img src="<?php echo $splashLogo['url'] ?>" alt="">
  	</div>

  	<div class="home-nav">
  		<div class="nav-logo">
  			<img src="<?php echo $navLogo['url'] ?>" alt="">
  		</div>
  		<div class="nav-about">
  			<?php echo $navAbout ?>
  		</div>
  		<div class="nav-links">
  			<?php if(get_field('nav_repeater')): ?>
  			    <?php while(has_sub_field('nav_repeater')): ?>
  			      
  			      <ul>
  			        <?php if(get_sub_field('nav_partner')): ?>
  			          <?php while(has_sub_field('nav_partner')): ?>
  			            <a href="<?php the_sub_field('nav_partner_link') ?>" target="_blank"><li><?php the_sub_field('nav_partner_name') ?></li></a>
  			          <?php endwhile; ?>
  			        <?php endif; ?>
  			      </ul>

  			    <?php endwhile; ?>
  			<?php endif; ?>
  		</div>
  	</div>
  </div> <!-- /.container -->
</div> <!-- /.main -->

<div class="navigation">
	<div class="nav-container">
		<p>info</p>
		<div class="cross">
			<div class="bar1 bar"></div>
			<div class="bar2 bar"></div>
		</div>
	</div>
	<div class="footer">
		<div class="footer-bar">
			<div class="bar3 barr"></div>
			<div class="bar4 barr"></div>
		</div>
		<p>profile</p>
	</div>
	<?php get_footer(); ?>
</div>

<div class="profile">
	<h2>Nathaniel Garcia</h2>
	<div class="profile-pic">
		<img src="<?php echo $profilePic['url'] ?>" alt="">
	</div>
	<div class="profile-text">
		<p><?php echo $profileText ?></p>
	</div>
	<p></p>
</div>

<p class="biography">Made by <a href="http://biographydesign.com/" target="_blank">Biography Design</a></p>

